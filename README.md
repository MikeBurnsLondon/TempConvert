# TempConvert
Sample .Net/Angular temperature converter application by Mike Burns

# Recommended environment

This project was created using Visual Studio Community 2019 Version 16.10.0

Also installed:

Microsoft .NET 5 SDK version 5.0.300 - https://dotnet.microsoft.com/download/visual-studio-sdks

TypeScript version 4.0.5 - https://www.typescriptlang.org/download

nvm (Node Version Manager) version 1.1.7 - https://github.com/coreybutler/nvm-windows/releases

Node.js version 14.15.0 - via nvm

npm (NuGet Package Manager) version 6.14.8 - via nvm

Angular CLI version 11.0.1 - via npm

For Windows Deployment:

IIS Version 20H2 (OS Build 19042.985) - via Windows Control Panel\Programs and Features 

Windows .Net Core Runtime version 5.0.6 - https://dotnet.microsoft.com/download/dotnet/5.0

Windows .Net Core 5 Runtime Hosting Bundle - https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/hosting-bundle?view=aspnetcore-5.0

# Build instructions

In a Command Prompt, browse to <AppDir>\ClientApp
Execute command "npm install --no-optional" 
Open the project in Visual Studio and Build from the menu Build\Build Solution

# Unit testing

To run (very simple) Unit Tests using Jasmine/Karma/Chrome:
In a Command Prompt, browse to <AppDir>\ClientApp
Execute command "ng test"

# Deployment instructions

To deploy to IIS:

Ensure that the the runtime and hosting bundle have been installed on the machine running IIS
Create a new Application, and confirm that the Application Pool Identity has proper access to the physical directory
Publish the Application:
	In Visual Studio (must have been run as Administrator), from the Build Menu, select Publish <AppName>
	On the Publish Page, click on +New
	Select WebServer (IIS) and click Next
	Select Web Deploy and click Next
	Specify the values in the dialog box as follows:
		Target - server name (localhost if deploying to IIS on same machine)
		Site Name - TempConvert
		Destination URL - as set up in IIS earlier, example http://TempConvert
		User Name, Password - account with sufficient privileges for the target
	Click Finish
	Back on the Publish page, check the values you just entered and ensure the following also:
		Configuration: Release
		Target Framework: net5.0
		Deployment Mode: Self-contained
		Target Runtime: win-x64
	Click on the Publish button

	
		



