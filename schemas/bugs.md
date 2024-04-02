-BUG #1: npm run seed create error messages. i had to install npm i pg nd modify config.js

-BUG #2: authUser() decodes token instead of verifying.

-BUG #3: There is no validation for database inputs. one of the docstrings mentioned that we are using jsonschema but it was not included in any way in the original code

-BUG #4: I treated registration as bug #3 and updating as bug #4.

-BUG #5: PATCH users/username does not allow user to update self. requireAdmin middleware was restricting non-admins from accessing the route, even if they are the user being updated.

-BUG #6: auth/login does not await User.authenticate, which allows anyone to receive a login token regardless of credentials entered.



