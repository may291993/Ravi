import pandas as pd
import os

list1 = {'Colors': ['Red', 'Green', 'Yellow', 'Orange'],
	'Vehicle': ['Car', 'Bike', 'Scooter', 'Truck'],
	'Nature': ['Wind', 'Earth','Fire', 'Wind']}

print("Making DataFrame")

my_df = pd.DataFrame(list1, columns =['Colors', 'Vehicle', 'Nature'])

print("opening file")


import pandas as pd
import os

list1 = {'Colors': ['Red', 'Green', 'Yellow', 'Orange'],
	'Vehicle': ['Car', 'Bike', 'Scooter', 'Truck'],
	'Nature': ['Wind', 'Earth','Fire', 'Wind']}

print("Making DataFrame")

my_df = pd.DataFrame(list1, columns =['Colors', 'Vehicle', 'Nature'])

print("opening file")

writer = pd.ExcelWriter('result.css', engine='xlsxwriter')

my_df.to_excel(writer, sheet_name='Sheet1')
writer.save()

print('done')