In Python, you should generally use **lists** for most cases. 

Lists are more versatile and have a wider range of built-in methods.  Arrays are more suitable for numerical data where performance is critical.

my_list = [1, 2, 3, 4, 5]

# Accessing elements
print(my_list[0])  # Output: 1
print(my_list[2])  # Output: 3
# Get user input for the list
user_input = input("Enter the elements of the list separated by spaces: ")
my_list = list(map(int, user_input.split())) 
