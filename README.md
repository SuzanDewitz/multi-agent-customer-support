# multi-agent-customer-support
1. Steps to Set Up and Push a Multi-Agent Customer Support System
Set Up GitHub Repository:

Create a new repository on GitHub (e.g., multi-agent-customer-support).

Clone the repository to your local machine:

git clone https://github.com/yourusername/multi-agent-customer-support.git
cd multi-agent-customer-support

2. Create and Activate Virtual Environment:

Install virtualenv if not already in

  pip install virtualenv

  Create a virtual environment:


python -m venv venv
Activate the virtual environment:

Windows: venv\Scripts\activate

Mac/Linux: source venv/bin/activate

Install Project Dependencies:

Install the required dependencies using pip:


pip install -r requirements.txt
Set Up Environment Variables:

Create a .env file in the root of the project:

touch .env
Add your OpenAI API key and other necessary environment variables into the .env file:


OPENAI_API_KEY=your-openai-api-key
Install python-dotenv to Load Environment Variables:

Install the python-dotenv package:

pip install python-dotenv
Add the following to your main.py to load the environment variables:


import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env
Set Up .gitignore to Exclude Sensitive Files:

Create a .gitignore file if not already present:


touch .gitignore
Add the following entries to .gitignore to ensure sensitive files (like .env) are not pushed to GitHub:


echo -e "\n.env\nvenv/\n__pycache__/\n*.pyc" >> .gitignore
Push Code to GitHub:

Add and commit all files (excluding the .env file and other ignored files):


git add .
git commit -m "Initial commit with multi-agent customer support system"
Push the code to GitHub:


git push origin main
Verify .env is Excluded from GitHub:

After pushing your code, check your GitHub repository to ensure that the .env file is not visible (because it should be excluded by .gitignore).

Troubleshooting:
If you receive errors related to your OpenAI API quota (e.g., RateLimitError), make sure you've added a payment method to your OpenAI account. You may need to upgrade to a paid plan if you exceed the free tier limits.

If your .env file is accidentally pushed to GitHub, delete it from the repository:


git rm --cached .env
git commit -m "Remove .env file from GitHub"
git push origin main

Always check that the .gitignore is correctly set up to avoid pushing sensitive files.