(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{377:function(e,t,a){e.exports=a.p+"assets/img/vsc-zopeneditor-sample.584c6965.png"},378:function(e,t,a){e.exports=a.p+"assets/img/vsc-allocate-jcl.af776f7c.png"},379:function(e,t,a){e.exports=a.p+"assets/img/rse-zowe-explorer-view-profiles.cd5cb7bd.gif"},380:function(e,t,a){e.exports=a.p+"assets/img/rse-upload-files-vsc.1148cd6b.gif"},381:function(e,t,a){e.exports=a.p+"assets/img/rse-copy-ps.e844b7a7.gif"},382:function(e,t,a){e.exports=a.p+"assets/img/rse-download-local.acd581a7.png"},383:function(e,t,a){e.exports=a.p+"assets/img/rse-script.1d8b6422.gif"},410:function(e,t,a){"use strict";a.r(t);var o=a(33),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"managing-z-os-resources-with-ibm-rse-api-plug-in-for-zowe-cli-tutorial"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#managing-z-os-resources-with-ibm-rse-api-plug-in-for-zowe-cli-tutorial"}},[e._v("#")]),e._v(" Managing z/OS resources with IBM RSE API Plug-in for Zowe CLI tutorial")]),e._v(" "),o("p",[e._v("This tutorial demonstrates some features of IBM RSE API Plug-in for Zowe CLI (RSE CLI plug-in) and includes exercises to help you become familiar with managing z/OS resources via command-line operations and the Zowe Explorer VS Code extension.")]),e._v(" "),o("h2",{attrs:{id:"learning-objectives"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#learning-objectives"}},[e._v("#")]),e._v(" Learning objectives")]),e._v(" "),o("p",[e._v("This tutorial does not cover all features of the RSE CLI plug-in, but demonstrates the approaches that you can apply when managing z/OS resources.")]),e._v(" "),o("p",[e._v("By completing the tutorial, you learn about the following approaches to manage z/OS resources with the RSE CLI plug-in:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#approach-1-using-the-zowe-explorer-vs-code-extension-to-manage-z-os-resources"}},[e._v("Use the Zowe Explorer VS Code extension")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#approach-2-using-a-command-line-terminal-to-manage-z-os-resources"}},[e._v("Use a command-line window")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#approach-3-using-a-script-to-automate-command-line-operations-against-z-os-resources"}},[e._v("Use a script to automate the command-line operations")])])]),e._v(" "),o("h2",{attrs:{id:"tutorial-scenario"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-scenario"}},[e._v("#")]),e._v(" Tutorial scenario")]),e._v(" "),o("p",[e._v("The tutorial scenario is based on a fictitious company that has applications written in COBOL. The company does not have z/OSMF configured on z/OS. As an alternative, they have installed and configured IBM Remote System Explorer API (RSE API) on z/OS. They want to use the RSE CLI plug-in to interact with z/OS by using RSE API instead of using z/OSMF.")]),e._v(" "),o("p",[e._v("In this scenario, you will:")]),e._v(" "),o("ul",[o("li",[e._v("Import application code to your local machine.")]),e._v(" "),o("li",[e._v("Submit JCL files to run jobs on z/OS.")]),e._v(" "),o("li",[e._v("List data sets.")]),e._v(" "),o("li",[e._v("Upload files to data sets.")]),e._v(" "),o("li",[e._v("Check job status.")]),e._v(" "),o("li",[e._v("Download output files of jobs.")])]),e._v(" "),o("h2",{attrs:{id:"time-required"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#time-required"}},[e._v("#")]),e._v(" Time required")]),e._v(" "),o("p",[e._v("It takes approximately 10 minutes to complete each approach. If you explore other features related to this tutorial, it can take longer to complete.")]),e._v(" "),o("h2",{attrs:{id:"audience"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#audience"}},[e._v("#")]),e._v(" Audience")]),e._v(" "),o("p",[e._v("This tutorial is for mainframe developers who want to use the RSE API support provided by the RSE CLI plug-in as an alternative to using z/OSMF to manage z/OS resources.")]),e._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("p",[e._v("Before getting started with the tutorial, you must complete the following tasks:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Create an RSE profile. For instructions, see "),o("RouterLink",{attrs:{to:"/Docs/interact_zos_cli.html#creating-an-rse-profile"}},[e._v("Creating an RSE profile")]),e._v(" via command line, or "),o("RouterLink",{attrs:{to:"/Docs/interact_zos_zowe_explorer.html#using-rse-api-in-zowe-explorer"}},[e._v("Setting up and using RSE profiles")]),e._v(" to create the profile via Zowe Explorer.")],1)]),e._v(" "),o("li",[o("p",[e._v("Clone the "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-sample.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample repository"),o("OutboundLink")],1),e._v(" and switch to the "),o("code",[e._v("tutorial-complete")]),e._v(" Git branch that has the final updated set of programs and support files to perform the tasks described in this tutorial by following these steps:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Clone the sample repository by issuing the following command in a command-line window:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:IBM/zopeneditor-sample.git\n")])])])]),e._v(" "),o("li",[o("p",[o("code",[e._v("cd")]),e._v(" into the zopeneditor-sample directory that was just cloned.")])]),e._v(" "),o("li",[o("p",[e._v("Switch to the "),o("code",[e._v("tutorial-complete")]),e._v(" Git branch with the command:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout tutorial-complete\n")])])])])])])]),e._v(" "),o("h2",{attrs:{id:"approach-1-using-the-zowe-explorer-vs-code-extension-to-manage-z-os-resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#approach-1-using-the-zowe-explorer-vs-code-extension-to-manage-z-os-resources"}},[e._v("#")]),e._v(" Approach 1: Using the Zowe Explorer VS Code extension to manage z/OS resources")]),e._v(" "),o("p",[e._v("This section describes the procedure of managing z/OS resources with the Zowe Explorer VS Code extension.")]),e._v(" "),o("p",[e._v("To get set up with VS Code, ensure that IBM Z Open Editor VS Code extension and Zowe Explorer VS Code extension are installed. For more information, see "),o("RouterLink",{attrs:{to:"/Docs/interact_zos_zowe_explorer.html#using-rse-api-in-zowe-explorer"}},[e._v("Using RSE support in Zowe Explorer VS Code extension")]),e._v(".")],1),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open VS Code, select "),o("strong",[e._v("File > Open Folder")]),e._v(" (Windows) or "),o("strong",[e._v("File > Open...")]),e._v(" (Mac) from the top menu bar, and select the folder "),o("strong",[e._v("zopeneditor-sample")]),e._v(" that was cloned.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(377),alt:"zopeneditor-sample in VS Code"}})]),e._v(" "),o("p",[e._v("In the lower left corner, make sure the Git branch that is selected is the "),o("code",[e._v("tutorial-complete")]),e._v(" branch. If it is not on that branch, click the Git branch that is shown and select "),o("code",[e._v("tutorial-complete")]),e._v(" or "),o("code",[e._v("origin/tutorial-complete")]),e._v(" branch from the list of available branches.")])]),e._v(" "),o("li",[o("p",[e._v("Open the "),o("strong",[e._v("JCL")]),e._v(" folder within VS Code and click "),o("code",[e._v("ALLOCATE.jcl")]),e._v(" to edit the "),o("code",[e._v("ALLOCATE.jcl")]),e._v(" file on line 16 and set the HLQ.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(378),alt:"ALLOCATE.jcl"}})])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("code",[e._v("Terminal")]),e._v(" from the top VS Code menu bar, and then select "),o("code",[e._v("New Terminal")]),e._v(" to open the terminal.")])]),e._v(" "),o("li",[o("p",[e._v("Submit the local "),o("code",[e._v("ALLOCATE.jcl")]),e._v(" file by entering this command in the terminal:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe rse submit local-file "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./JCL/ALLOCATE.jcl"')]),e._v("\n")])])])]),e._v(" "),o("li",[o("p",[e._v("After the job is submitted, click the Zowe icon on the left side of VS Code. In the DATA SETS view, click the "),o("strong",[e._v("+")]),e._v(" symbol to add the RSE profile to the view. Repeat this with the JOBS view.")]),e._v(" "),o("p",[e._v("Once the RSE profile shows up in the view window, click the magnifying glass next to the RSE profile name and enter "),o("code",[e._v("HLQ.SAMPLE*")]),e._v(" in the search bar. You need to replace "),o("code",[e._v("HLQ")]),e._v(" with the modification to it as you did in "),o("code",[e._v("ALLOCATE.jcl")]),e._v(". The data sets created by "),o("code",[e._v("ALLOCATE.jcl")]),e._v(" should be listed in the Data Sets View.")])]),e._v(" "),o("li",[o("p",[e._v("You can check the job from the JCL that was submitted by clicking the magnifying glass next to the RSE profile in the JOBS view and entering the HLQ that was added to "),o("code",[e._v("ALLOCATE.jcl")]),e._v(" into the search bar as the filter. You can view the spool files by opening the Job name "),o("code",[e._v("ZDEALLC")]),e._v(" and clicking the spool file to open it in the Editor.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(379),alt:"Adding RSE profiles to Zowe Explorer and viewing Data Sets and Jobs"}})])]),e._v(" "),o("li",[o("p",[e._v("Upload the COBOL and copybook files into the created data sets, "),o("code",[e._v("HLQ.SAMPLE.COBOL")]),e._v(" and "),o("code",[e._v("HLQ.SAMPLE.COBCOPY")]),e._v(", after you replace HLQ with the value entered in "),o("code",[e._v("ALLOCATE.jcl")]),e._v(". Right-click the data set and select the member to upload. In the "),o("code",[e._v("zopeneditor-sample")]),e._v(" directory that was cloned, choose the files in the COBOL directory for the "),o("code",[e._v("HLQ.SAMPLE.COBOL")]),e._v(" data set and the files in the COPYBOOK directory for the "),o("code",[e._v("HLQ.SAMPLE.COBCOPY")]),e._v(" data set.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(380),alt:"Upload Cobol and Copybook files into Data Sets Using VS Code"}})])]),e._v(" "),o("li",[o("p",[e._v("Copy and paste the following files in the "),o("code",[e._v("RESOURCES")]),e._v(" directory of "),o("strong",[e._v("zopeneditor-sample")]),e._v(" into the appropriate sequential data set with in the Zowe Explorer Data Sets View, replacing HLQ with the value entered in "),o("code",[e._v("ALLOCATE.jcl")]),e._v(". Save the files in Zowe Explorer Data Sets View so they can be uploaded to z/OS.")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("RESOURCES/SAMPLE.CUSTFILE")]),e._v(" into the sequential data set "),o("code",[e._v("HLQ.SAMPLE.CUSTFILE")])])]),e._v(" "),o("li",[o("p",[o("code",[e._v("RESOURCES/SAMPLE.TRANFILE")]),e._v(" into the sequential data set "),o("code",[e._v("HLQ. SAMPLE TRANFILE")])])])]),e._v(" "),o("p",[o("img",{attrs:{src:a(381),alt:"Copy and Paste Sequential Data Sets to Save on z/OS"}})])]),e._v(" "),o("li",[o("p",[e._v("In the JCL directory of "),o("strong",[e._v("zopeneditor-sample")]),e._v(", repeat the modification to the "),o("code",[e._v("RUN.jcl")]),e._v(" on line 30 and set the HLQ with the same one used in "),o("code",[e._v("ALLOCATE.jcl")]),e._v(".  You might or might not need to modify the other symbolics depending on the compile and link libraries your host system uses. You might or might not change the "),o("code",[e._v("SPACE1")]),e._v(" and "),o("code",[e._v("SPACE2")]),e._v(" symbolics, and save the file.")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("code",[e._v("Terminal")]),e._v(" from the top VS Code menu bar, then select "),o("code",[e._v("New Terminal")]),e._v(" to open the terminal.")])]),e._v(" "),o("li",[o("p",[e._v("Submit the local "),o("code",[e._v("RUN.jcl")]),e._v(" file by entering this command in the terminal:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe rse submit local-file "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./JCL/RUN.jcl"')]),e._v("\n")])])])]),e._v(" "),o("li",[o("p",[e._v("View the status of the Job for the submission of "),o("code",[e._v("RUN.jcl")]),e._v(" by refreshing the Zowe Explorer's Jobs View and selecting the Job Name "),o("code",[e._v("ZDERUN")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("After the job completes, refresh Zowe Explorer's Data Sets View to see the new data sets that were created by the "),o("code",[e._v("RUN.jcl")]),e._v(". These data sets include the following files, replacing HLQ with the value entered in the "),o("code",[e._v("RUN.jcl")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("HLQ.SAMPLE.CUSTOUT")])]),e._v(" "),o("li",[o("code",[e._v("HLQ.SAMPLE.CUSTRPT")])])]),e._v(" "),o("p",[e._v("You can view the files by clicking them to open in the Editor.")])]),e._v(" "),o("li",[o("p",[e._v("To download the resulting files from the job, click "),o("code",[e._v("Terminal")]),e._v(" from the top VS Code menu bar, then open a terminal by selecting "),o("code",[e._v("New Terminal")]),e._v(" and enter the following commands replacing HLQ with the value entered in the "),o("code",[e._v("RUN.jcl")]),e._v(".")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe rse download data-set "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HLQ.SAMPLE.CUSTOUT"')]),e._v("\nzowe rse download data-set "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HLQ.SAMPLE.CUSTRPT"')]),e._v("\n")])])]),o("p",[e._v("Switch back to the Files view to the opened folder "),o("code",[e._v("zopeneditor-sample")]),e._v(" and the downloaded files will be in a folder named after the HLQ value entered in the commands above.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(382),alt:"Download Data Set Location"}})])])]),e._v(" "),o("h2",{attrs:{id:"approach-2-using-a-command-line-terminal-to-manage-z-os-resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#approach-2-using-a-command-line-terminal-to-manage-z-os-resources"}},[e._v("#")]),e._v(" Approach 2: Using a command-line terminal to manage z/OS resources")]),e._v(" "),o("p",[e._v("This section describes the procedure of how you manage z/OS resources in a command-line terminal.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Edit the "),o("code",[e._v("ALLOCATE.jcl")]),e._v(" file on line 16 and set the HLQ.")])]),e._v(" "),o("li",[o("p",[e._v("Submit the JCL to run on z/OS with the following command:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe rse submit local-file "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./JCL/ALLOCATE.jcl"')]),e._v("\n")])])]),o("p",[e._v("The output of the job submission will be printed in the terminal displaying the job id, return code, job name, and status of the job.")])]),e._v(" "),o("li",[o("p",[e._v("List the data sets that were created by the JCL replacing HLQ with the value set in "),o("code",[e._v("ALLOCATE.jcl")]),e._v(".")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe rse list data-set HLQ.SAMPLE*\n")])])]),o("p",[e._v("The output should be as follows:")]),e._v(" "),o("div",{staticClass:"language-terminal extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("HLQ.SAMPLE.COBCOPY\nHLQ.SAMPLE.COBOL\nHLQ.SAMPLE.CUSTFILE\nHLQ.SAMPLE.CUSTOUT\nHLQ.SAMPLE.CUSTRPT\nHLQ.SAMPLE.LOAD\nHLQ.SAMPLE.OBJ\nHLQ.SAMPLE.TRANFILE\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Upload the files from the cloned repository into the newly created data sets, replacing HLQ with the value set in "),o("code",[e._v("ALLOCATE.jcl")]),e._v(".")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe rse upload dir-to-pds "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./COBOL"')]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HLQ.SAMPLE.COBOL"')]),e._v("\n")])])]),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe rse upload dir-to-pds "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./COPYBOOK"')]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HLQ.SAMPLE.COBCOPY"')]),e._v("\n")])])]),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe rse upload file-to-data-set "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./RESOURCES/SAMPLE.CUSTFILE"')]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HLQ.SAMPLE.CUSTFILE"')]),e._v("\n")])])]),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe rse upload file-to-data-set "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./RESOURCES/SAMPLE.TRANFILE"')]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HLQ.SAMPLE.TRANFILE"')]),e._v("\n")])])]),o("p",[e._v("Make sure that the terminal response is "),o("code",[e._v("success: true")]),e._v(" for all the uploads.")])]),e._v(" "),o("li",[o("p",[e._v("Perform the same modification to the "),o("code",[e._v("RUN.jcl")]),e._v(" on line 30 and set the HLQ with the same one used in "),o("code",[e._v("ALLOCATE.jcl")]),e._v(".")]),e._v(" "),o("p",[e._v("You might or might not need to modify the other symbolics depending on the compile and link libraries your host system uses. You might or might not change the "),o("code",[e._v("SPACE1")]),e._v(" and "),o("code",[e._v("SPACE2")]),e._v(" symbolics, and save the file.")])]),e._v(" "),o("li",[o("p",[e._v("Submit the "),o("code",[e._v("RUN.jcl")]),e._v(" with the following command:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe rse submit local-file "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./JCL/RUN.jcl"')]),e._v("\n")])])]),o("p",[e._v("The response will include the "),o("code",[e._v("jobid")]),e._v(". To check the completion of the job, replace the "),o("code",[e._v("jobid")]),e._v(" in the following command with the returned job ID and run it in the terminal window:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe rse view job-status-by-jobid jobid\n")])])])]),e._v(" "),o("li",[o("p",[e._v("When the status of the job is complete, download the files that result from the job with the following commands:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe rse download data-set "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HLQ.SAMPLE.CUSTOUT"')]),e._v("\nzowe rse download data-set "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HLQ.SAMPLE.CUSTRPT"')]),e._v("\n")])])]),o("p",[e._v("To see the downloaded files enter the command "),o("code",[e._v("ls")]),e._v(" (Mac) or "),o("code",[e._v("dir")]),e._v(" (Windows).")])])]),e._v(" "),o("h2",{attrs:{id:"approach-3-using-a-script-to-automate-command-line-operations-against-z-os-resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#approach-3-using-a-script-to-automate-command-line-operations-against-z-os-resources"}},[e._v("#")]),e._v(" Approach 3: Using a script to automate command-line operations against z/OS resources")]),e._v(" "),o("p",[e._v("You can do the same actions as described in approach 1 in a shell script. This section describes how to create and use the script.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Edit the "),o("code",[e._v("ALLOCATE.jcl")]),e._v(" file on line 16 and set the HLQ.")])]),e._v(" "),o("li",[o("p",[e._v("Perform the same modification to the "),o("code",[e._v("RUN.jcl")]),e._v(" on line 30 and set the HLQ with the same one used in "),o("code",[e._v("ALLOCATE.jcl")]),e._v(". You might or might not need to modify the other symbolics depending on the compile and link libraries your host system uses.  You might or might not change the "),o("code",[e._v("SPACE1")]),e._v(" and "),o("code",[e._v("SPACE2")]),e._v(" symbolics, and save the file.")])]),e._v(" "),o("li",[o("p",[e._v("The script "),o("code",[e._v("zowecli-cobol-upload-run-tutorial.sh")]),e._v(" is located in the "),o("code",[e._v("SCRIPTS")]),e._v(" directory of the cloned repo. Edit the HLQ variable in the code on line 12 to match the modification to the JCL files.")])]),e._v(" "),o("li",[o("p",[e._v("Open a terminal in VS Code and enter "),o("code",[e._v("SCRIPTS/zowecli-cobol-upload-run-tutorial.sh")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:a(383),alt:"Using Command Line Operations in a Script"}})])])]),e._v(" "),o("p",[e._v("Alternatively, you can run this script with Zowe CLI, which uses z/OSMF on the host instead of RSE API. To adapt the script for use in Zowe CLI, change the values of the variables "),o("code",[e._v("FILES_CMD")]),e._v(" and "),o("code",[e._v("JOBS_CMD")]),e._v(" in the script to the following:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v('FILES_CMD="files"')])]),e._v(" "),o("li",[o("code",[e._v('JOBS_CMD="jobs"')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);