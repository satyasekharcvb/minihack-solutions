# Minihacks Solutions

## HACK: Modify standard component behaviors from custom components

### Description
While Lightning Message Service allows interaction only between custom components, Dynamic Interactions allows custom components to send events that standard components can respond to. Complete this challenge to understand how you can make your Lightning pages more dynamic and interactive.

### Requirements
<ul>
    <li>Create an app page with 3 columns with the following components
        <ul>
            <li>Column 1: An LWC containing a slider that accepts values between 1 and 30</li>
            <li>Column 2: A rich text standard component with initial text: Move the slider to update results</li>
            <li>Column 3: A Recent Items standard component showing 5 records from Account, Contact, Case, and Lead</li>
        </ul>
    </li>
    <li>The following changes must automatically occur when the slider value changes
        <ul>
        <li>The number of records shown in the Recent Items component must be updated to match the value chosen from the slider.</li>
        <li>The rich text component must be updated to show the message “Slider value has changed X number of times”, where X is the number of times the slider’s value has changed. Tip: Use debouncing logic.</li>
        </ul>   
    </li>
</ul>


### Features to be used
App Builder, Lightning Web Components, Dynamic Interactions

### Code modules
<ul>
<b>slider LWC Component</b><br/>
<b>Dynamic Interactions App Page</b>
</ul>