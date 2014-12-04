# pcn-audit #

The pcn-audit tool allows those who are engaged in the PCN analysis data collection process to generate a standardized PCN data object which other processing tools can then use to generate a PCN diagram. For complete details on the data format (spec) used in the audit tool, please visit the [PCN Spec GitHub repository](https://github.com/pcnsuite/pcnspec).

**_NOTE:_** this tool is intended to take the place of Dr. Scott Sampson's paper PCN audit form.

## What is PCN analysis? ##

Process Chain Network (PCN) Analysis helps document, diagnose, and improve interactive business processes. Dr. Scott Sampson, Professor of Service Operations and Business Management at Brigham Young University's Marriott School of Management, describes PCN Analysis as follows:

"The purpose of PCN Analysis is to improve service business processes by systematically documenting the processes, assessing value coming from process components, identifying problem areas, and methodically generating process improvement alternatives.

"PCN Analysis begins by documenting an interactive business process. This includes identifying which aspects of the process contribute to:

* customer value,
* customer costs (including psychological costs of effort, waiting, etc.),
* provider costs (labor or other resources),
* provider revenue potential,
* risks of process failure, including identifying potential causes of process failure.

"PCN Analysis evaluates the current process configuration and identifies means for process improvement. The goals of PCN Analysis include:

1. Provide a lean process that delivers maximum value at minimum costs.
2. Provide a robust process that has a low likelihood of failure even when faced with unusual customer variability.
3. Provide an agile process that efficiently and effectively accommodates varying customer needs, so that individual customers are neither over-served nor under-served.
4. Provide a feasible process that can be implemented with the resources and skill sets of both the provider and the customers.
5. Provide an understandable process that can reasonably be communicated to employees and customers.

"In summary, PCN Analysis is a process diagramming technique coupled with principles and methods for analyzing processes and systematically identifying improvement opportunities. PCN Analysis is founded in state-of-the-art science of service design based on the work of leading management researchers."

Using this standard data format for representing data collected through PCN Analysis, business managers can better interpret the data with any array of products that implement this standard. This will lead to better interactive business process designs.

## PCN Audit Tool walkthrough ##

The following subsections outline the functions of the different parts of the PCN audit tool. This section will provide a brief description of the form fields, as well as how the tool functions. Consult the [PCN Spec GitHub repository](https://github.com/pcnsuite/pcnspec) for a more detailed explanation of all of the different form fields.

### Process information ###

This part of the tool is where the general audit metadata goes. Entering information into these fields is not required in order to create a valid PCN data object, but it is recommended. Entering data into these fields adds greater clarity to the process audit. This same information can be found on the first page of the paper PCN audit form.

#### Features ####

There are currently no features within this section that require detailed explanation.

#### Fields ####

* Process - this is the official name of the process
* Industry - the type of industry for which the PCN audit tool was used
* Provider - the title of the provider (i.e. IKEA)
* Customer - usually entered as "Customer"
* Description - this is simply a brief description outlining the details of the PCN diagram

### Process steps ###

This part of the tool allows the user to specify the step-by-step details of the process audit. The user may enter any number of steps into the process steps container. This same information can be found on pages 2-4 of the paper PCN audit form.

#### Features ####

* Show advanced features checkbox - the PCN audit is meant to be an efficient process. For this reason, the advances features of a step (such as the step type, or the step predecessors) are initially hidden from the user's view. Once the advanced features are desired, the user can simply click this checkbox and begin the process of filling the advanced information out.
* Collapsible containers - this was implemented for the convenience of the user. If there is any need to expand or collapse a particular container, the user may do so.
* Expand/Collapse all buttons - tis button expands/collapses all of the containers in Process Steps
* Add step button - this button creates a new step that the user may then fill out
* Remove step button - when clicked, this button (located on the top right of any dynamic container) will delete its associated container. These buttons are located on a Step, a Problem, and a Predecessor.
* Repositioning buttons - these buttons (located just to the left of the delete button) allow the user to reposition a given step. When visible, the 'up' arrow will move the step forward, and the 'down' arrow will move the step backward.
* Add problem - this will add a new problem to the associated step
* Add predecessor - this will add a new predecessor to the associated step

#### Fields ####

Fields are broken up by container. All of the fields except for Step Title, Specific Value, and the Problems container will appear after the 'Show advanced features' option is selected.

##### Step Fields #####

* Step Title - this is the title of the step
* Specific Value - this specifies the specific value (expressed as ranges of happy or frownie faces)
* Generic Value - this specifies the generic value (expressed as ranges of positive or negative dollar signs)
* Emphasized - indicated whether the step is very important
* Problems - potential problems associated with the step
* Position - the intended position of the step in the array of steps
* Predecessors - the preceding step(s)

##### Problems Fields #####

* Problem Type - the type of problem (choose the type as described by the person being interviewed)
* Reason - a description of why this is a valid problem

##### Position Fields #####

* This Entity - select the name of this step
* In Region - select the associated region
* With - select the other entity (if a surrogate or direct region)

##### Predecessors Fields #####

* Step - the name of the preceding step
* Relationship - the type of relationship
* Title - the title of the relationship (if necessary)

### Input information ###

This is the textarea in which the finalized PCN data object will render in JSON. Simply highlight the data within the textarea, press 'CTRL + C' to copy the data, and then paste it into the rendering program of your choice.

#### Features ####

There are currently no features within this section that require detailed explanation.

#### Fields ####

There are currently no fields within this section that require detailed explanation.
