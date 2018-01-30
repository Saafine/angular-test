# Angular Test Bed
1. Allows to test the interaction of a directive or component with it's template
2. Allows to test change detection
3. Allows to test and use Angulars Dependency Injections
4. Allows to test the ngModule configuration we use in our application
5. Allows to test user interaction via click & input fields
 
 # Dependency injection
 We can resolve dependancy using:
 - the get method from TestBed
 - the inject function at the start of a test spec
 - we can override providers for a component and resolve using the component's child injector