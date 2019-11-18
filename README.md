React Counter without Redux
Your task is to implement a simple counter, this time without using Redux for state management.

Implement a Counter component (as a class, not a functional component)
Get the Counter component to render a button and a number to the screen
Implement the constructor so that it initialized your Counter state
Implement an onClick handler for the rendered button
Trigger a call to setState() within the click handler. HINT: If you get an error saying "can't call setState of undefined", try adding .bind(this) to the handler call in render()