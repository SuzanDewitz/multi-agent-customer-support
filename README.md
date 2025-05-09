# multi-agent-customer-support
1. Create and Clone GitHub Repository
  - Create a new repository on GitHub (multi-agent-customer-support).
  - Clone the repository to your local machine:

  * In terminal add and run 
     ->   git clone https://github.com/SuzanDewitz/multi-agent-customer-support.git 
     ->   cd multi-agent-customer-support

2. Set up Virtual Environment: in  gitpod.io

Install virtualenv if not already in
* In terminal add and run 
       ->pip install virtualenv
       ->Create a virtual environment:

* Activate the virtual environment:
2. Set Up Virtual Environment
Install virtualenv if you don't have it installed:

* In terminal add and run 
pip install virtualenv
Create a virtual environment:

* In terminal add and run 
python -m venv venv
Activate the virtual environment:

On Windows:
* In terminal add and run 
venv\Scripts\activate

On Mac/Linux:
* In terminal add and run 
source venv/bin/activate

3. Install Dependencies
Install the required dependencies listed in requirements.txt:

  * pip install -r requirements.txt

4. Set Up Environment Variables
Create a .env file to store your sensitive information (like the OpenAI API key):

* In terminal add and run 
touch .env
- Add your OpenAI API key and other environment variables inside the .env file:

OPENAI_API_KEY=your-openai-api-key
Install python-dotenv to load environment variables:

* In terminal add and run 
pip install python-dotenv

 - In your main.py file, add the following code to load the .env variables:

import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env

5. Set Up .gitignore to Exclude Sensitive Files
Create a .gitignore file if you don't already have one:

* In terminal add and run 
touch .gitignore

Add the following entries to the .gitignore file to exclude sensitive files like .env and other unnecessary files:

* In terminal add and run 
 * echo -e "\n.env\nvenv/\n__pycache__/\n*.pyc" >> .gitignore
6. Push Code to GitHub
- Add and commit all your files (excluding the files listed in .gitignore):

* In terminal add and run 
  * git add .
  * git commit -m "Initial commit with multi-agent customer support system"
- Push the code to GitHub:

 * In terminal add and run 
 * git push origin main
7. Verify .env is Excluded from GitHub
After pushing your code, check your GitHub repository to make sure that the .env file is not pushed to GitHub. It should be excluded by the .gitignore.

Troubleshooting
Rate Limit Errors: If you encounter RateLimitError due to exceeding your OpenAI quota, ensure you've added a payment method to your OpenAI account and that you've upgraded your plan if necessary.

Accidental Push of .env: If the .env file was accidentally pushed to GitHub, remove it from the repository:

 * In terminal add and run 
 * git rm --cached .env
 * git commit -m "Remove .env file from GitHub"
 * git push origin main
Check .gitignore: If .env or any other sensitive files are still pushed to GitHub, double-check that the .gitignore file is set up properly.

+ Helpful Links
OpenAI API Documentation

GitHub .gitignore Template


