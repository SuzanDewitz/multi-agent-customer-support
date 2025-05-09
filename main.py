import os
from dotenv import load_dotenv
from crewai import Agent, Task, Crew

# Load API key and check
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise EnvironmentError("Missing OPENAI_API_KEY in .env file")

print("OpenAI Key Loaded:", api_key[:5] + "*****")

# Get user issue dynamically
user_issue = input("Please describe your issue: ")

# Define agents
customer_agent = Agent(
    role='Customer Support Agent',
    goal='Resolve general customer issues like password reset.',
    backstory='A helpful and polite customer service AI assistant.',
    allow_delegation=True
)

billing_agent = Agent(
    role='Billing Support Agent',
    goal='Help with billing and payment-related issues.',
    backstory='Patient and thorough with all billing questions.',
    allow_delegation=True
)

technical_agent = Agent(
    role='Technical Support Agent',
    goal='Resolve app crashes, login errors, and other tech issues.',
    backstory='Skilled in diagnosing and fixing technical problems.',
    allow_delegation=True
)

# Define the task
task = Task(
    description=user_issue,
    expected_output='Clear, step-by-step support instructions.',
    agent=customer_agent  # You could route based on issue type
)

# Create crew
crew = Crew(
    agents=[customer_agent, billing_agent, technical_agent],
    tasks=[task]
)

# Run and print result
result = crew.kickoff()
print("\n=== Support Response ===")
print(result)

# Log the interaction
with open("support_log.txt", "a") as log:
    log.write(f"Issue: {user_issue}\nResponse: {result}\n---\n")
