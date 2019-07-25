def add_numbers(x, y):
	sum = x + y
	return sum

num1 = 105
num2 = 205

print("the sum is", add_numbers(num1, num2))


def multiply_numbers(a, b):
	multiply = a * b
	return multiply

num1 = 5
num2 = 5

print("the multiply is", multiply_numbers(num1, num2))


def substracte_numbers(c, d):
	substract = c - d
	return substract

num1 = 100
num2 = 50

print("the substract is", substracte_numbers(num1, num2))


def devide_numbers(e, f):
	devide = e / f
	return devide

num1 = 10
num2 = 2

print("the devide is", devide_numbers(num1, num2))

a =[2, 6, 1, 0, 5, 9, 7, 3, 8, 4, 10]

print(a)
a.sort()
print(a)


import calendar

year = 2017
month = 12

year = int(input("year"))
month = int(input("month"))

	print(calendar.month(year, month))

print(calendar.month(year))
