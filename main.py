import os
from dotenv import load_dotenv
load_dotenv()  # Load environment variables from .env
print("OpenAI Key Loaded:", os.getenv("OPENAI_API_KEY")[:5] + "*****")
from crewai import Agent, Task, Crew

# Define agent
customer_agent = Agent(
    role='Customer Support Agent',
    goal='Help customers resolve account-related issues like password reset.',
    backstory='A helpful and polite customer service AI assistant.',
    allow_delegation=False
)

# Define task
task = Task(
    description='A customer forgot their password and needs help resetting it.',
    expected_output='Step-by-step instructions for password reset.',
    agent=customer_agent
)

# Run crew
crew = Crew(
    agents=[customer_agent],
    tasks=[task]
)

crew.kickoff()
