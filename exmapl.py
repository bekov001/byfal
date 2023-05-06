from rest_framework import renderers

from mysite4.test_api.serializers import CapitalSerializer


class User:
    def __init__(self, username):
        self.username = username


class Capital:
    def __init__(self, country, capital_city, capital_population, user: User):
        self.country = country
        self.capital_city = capital_city
        self.capital_population = capital_population
        self.author = user


author_obj = User('test_user')
capital_1 = Capital('Norway', 'Oslo', 693500, author_obj)
capital_2 = Capital('Canada', 'Toronto', 6193500, author_obj)
capital_3 = Capital('USA', 'WA', 6393500, author_obj)
capital_4 = Capital('Russia', 'Moscow', 1693500, author_obj)


queryset = [capital_1, capital_2, capital_3, capital_4]

serializer_obj = CapitalSerializer(instance=queryset, many=True)

json_render_for_our_data = renderers.JSONRenderer()
data_in_json = json_render_for_our_data.render(serializer_obj.data)


print(data_in_json)



