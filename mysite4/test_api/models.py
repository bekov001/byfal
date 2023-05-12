from django.conf import settings
from django.db import models


# class User(models.Model):
#     name = models.CharField(max_length=200)
#
#
# # Create your models here.
# class Capital(models.Model):
#     capital_city = models.CharField(max_length=200)
#     capital_population = models.IntegerField()
#     author = models.ForeignKey(User, on_delete=models.CASCADE)

# class Order(models.Model):
#     ticker = models.CharField(max_length=10)
#     start_price = models.IntegerField()
#     quantity_usdt = models.IntegerField()
#     # alias = models.CharField(max_length=60)
#
#     def __str__(self):
#         return self.ticker


# class Profile(models.Model):
#     user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     date_of_birth = models.DateField(blank=True, null=True)
#     photo = models.ImageField(upload_to='users/%Y/%m/%d', blank=True)
#     created = models.DateTimeField(auto_now_add=True)
#     balance = models.FloatField(default=0)
#
#     def __str__(self):
#         return 'Profile for user {}'.format(self.user.username)


from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles
from pygments.lexers import get_lexer_by_name
from pygments.formatters.html import HtmlFormatter
from pygments import highlight


LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted([(item, item) for item in get_all_styles()])


class Order(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='orders', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    ticker = models.CharField(max_length=20, blank=True, default='')
    quantity_usdt = models.IntegerField()
    is_active = models.BooleanField(default=True)
    closed = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ['created']


class Snippet(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='snippets', on_delete=models.CASCADE, null=True)
    # highlighted = models.TextField(default='')
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    code = models.TextField()
    linenos = models.BooleanField(default=False)
    language = models.CharField(choices=LANGUAGE_CHOICES, default='python', max_length=100)
    style = models.CharField(choices=STYLE_CHOICES, default='friendly', max_length=100)

    def save(self, *args, **kwargs):
        """
        Use the `pygments` library to create a highlighted HTML
        representation of the code snippet.
        """
        lexer = get_lexer_by_name(self.language)
        linenos = 'table' if self.linenos else False
        options = {'title': self.title} if self.title else {}
        formatter = HtmlFormatter(style=self.style, linenos=linenos,
                                  full=True, **options)
        self.highlighted = highlight(self.code, lexer, formatter)
        super().save(*args, **kwargs)

    class Meta:
        ordering = ['created']