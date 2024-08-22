# Full Stack Implementation Guide

## Basic Requirements
`Visual Studio 2022 Community` - `https://visualstudio.microsoft.com/vs/community/`<br>
`Visual Studio Code` - `https://code.visualstudio.com/`<br>
`Dot net core 7 package` - `https://dotnet.microsoft.com/en-us/download/dotnet/7.0`<br>
`Node JS` - `https://nodejs.org/en/download/prebuilt-installer`<br>
`PostgreSQL` - `https://www.postgresql.org/download/` - Set Password - `root` Port - `5432`<br>

# Step 1 : FrontEnd Workarounds

## Angular Setup
Open FrontEnd Directory and right click to `Open With Code`<br>
Turn on terminal from code - `Terminal -> New Terminal`<br>
Install these : - <br>
`Angular 14` - `npm i -g @angular/cli@14`<br>
`PrimeNG 14` - `npm i primeng@14 --save`<br>
`PrimeFlex` - `npm i primeflex`<br>
`PrimeIcons` - `npm i primeicons`<br>

# Step 2 : BackEnd Workarounds

## Step A : BackEnd Setup

Open BackEnd Directory and click on `.sln` file<br>
It'll load to Visual Studio Code.<br>

## Step B : Dot Net Dependency Setup

Use Nuget Pacakage manager in Visual Studio 2022 Community<br>
`Tools -> NuGet Package Manager -> Manage NuGet Package for Solution -> Browse` and install the following<br>
> Dot Net Core 7<br>
> AutoMapper<br>
> Microsoft.EntityFrameworkCore 7.0.0<br>
> Microsoft.VisualStudio.Web.CodeGeneration.Design 7.0.0<br>
> Microsoft.EntityFrameworkCore.Design 7.0.0<br>
> Microsoft.VisualStudio.Web.CodeGenerators.Mvc 7.0.0<br>
> Npgsql.EntityFrameworkCore.PostgreSQL 7.0.0<br>
> Npgsql.EntityFrameworkCore.PostgreSQL.Design<br>

## Step C : Creating Database
Set Migration to achieve<br>
`Tools -> NuGet Package Manager -> Package Manager Console`<br>
Type - <br>
<li>dotnet ef migrations add InitialCreate</li>
<li>dotnet ef database update</li>

This will create DataBase in Postgres. Make sure Postgres is running in background or foreground.<br>

# Step 3 : Run the program

## Step A : BackEnd Run Code
To run - click `F5`.<br>
It'll run on Swagger. Use it to check.<br>

## Step B : FrontEnd Run Code
To run - `ng serve -o`<br>
Check - `https://v14.angular.io/docs` if you run into errors.<br>

