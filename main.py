"""
This is a text based project that creates a register and login page.
"""

print("----Welcome to Our Website----")

# Ask the user if they want to register or login
register_or_login = input("Do you want to register or login?\nPress 'R' to register or 'L' to login: ")

# The user should press 'r' on the keyboard for register and 'l' for login
while register_or_login.lower() != 'r' and register_or_login.lower() != 'l':
    register_or_login = input("Sorry, invalid entry. Press 'R' to register or 'L' to login: ")

# For Registration. All The requirements for all the user inputs can be found in the README.md file
if register_or_login.lower() == 'r':
    print("----We need some data to register you----")
    first_name = input("First Name: ").strip()
    while not first_name:
        first_name = input("Sorry, first name can't be empty. Please enter a valid first name: ").strip()
    last_name = input("Last Name: ").strip()
    while not last_name:
        last_name = input("Sorry, last name can't be empty. Please enter a valid last name: ").strip()
    email = input("Email: ").strip()
    while '@' not in email:
        email = input("Sorry, an email should have an '@' sign. Please enter a valid email: ").strip()
    username = input("Username: ").strip()
    with open("database.txt") as database:
        while True:
            while not username:
                username = input("Sorry, username can't be empty. Please enter a valid username: ").strip()
            line = database.readline()
            while line:
                if (line.split())[3] != username:
                    pass
                else:
                    break
                line = database.readline()
            database.seek(0)
            if not line:
                '''Accept the username'''
                break
            else:
                username = input("Username already taken. Please enter another username: ").strip()
    print("Please enter a password: Guidelines to be followed:\n"
          "- At least 8 characters long\n"
          "- At most 10 characters long\n"
          "- There must be at least one digit\n"
          "- There must be at least one lowercase letter\n"
          "- There must be at least one uppercase letter\n")
    password = input("Password: ").strip()
    while True:
        if len(password) < 8 or len(password) > 10:
            password = input("Incorrect Password Length - Length must be 8 to 10 characters long: ").strip()
            continue
        if True:
            # print("Here")
            flag = False
            for char in password:
                if not char.isdigit():
                    # print("Pass")
                    pass
                else:
                    # print("Found")
                    flag = True
                    break
            if flag:
                pass
            else:
                password = input("Incorrect Password - Must have at least one digit: ").strip()
                continue
        # print("End of first if")
        if True:
            flag = False
            for char in password:
                if not char.islower():
                    pass
                else:
                    flag = True
                    break
            if flag:
                pass
            else:
                password = input("Incorrect Password - Must have at least one lowercase letter: ").strip()
                continue
        if True:
            flag = False
            for char in password:
                if not char.isupper():
                    pass
                else:
                    flag = True
                    break
            if flag:
                pass
            else:
                password = input("Incorrect Password - Must have at least one uppercase letter: ").strip()
                continue
        break
    confirm_password = input("Confirm Password: ").strip()
    while password != confirm_password:
        confirm_password = input("Passwords don't match. Confirm Password again: ").strip()
    with open("database.txt",'a') as database:
        database.write(f'{first_name} {last_name} {email} {username} {password} \n')
        print("Registration successful.")

else:
    username = input("Enter the username: ")
    password = input("Enter the password: ")
    with open("database.txt") as database:
        while True:
            line = database.readline()
            while line:
                if (line.split())[3].lower() == username.lower() and (line.split())[4] == password:
                    break
                line = database.readline()
            database.seek(0)
            if not line:
                print("Sorry, this combination of username and password does not match any of our records. Please try again.\n")
                username = input("Enter the username: ")
                password = input("Enter the password: ")
            else:
                print("Login Successful.")
                break
