"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration

function test()
{
    console.log("Hallo Sohrab!");
}


/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeName()
{
    let firstName = "Chai";
    console.log(`Hallo ${firstName}!`);
}

// ausgabeName();

// console.log(`Hallo ${firstName}!`); // Fehler --> SCOPE!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// Argumente sind Daten für Parameter
ausgabeName2("Sohrab"); // call + Argument(e)
ausgabeName2("Cagri");
ausgabeName2("Yalcin");


function ausgabeName2(firstName)
{
    console.log(`Hallo ${firstName}!`);
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

function ausgabeNamenParams(firstName, familyName) 
{
    console.log("Hallo " + firstName + " " + familyName + "!"); 
}

ausgabeNamenParams("Penny", "Tration");
ausgabeNamenParams(prompt("Vorname"), prompt("Nachname"));