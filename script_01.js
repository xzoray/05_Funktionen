"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
test();

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
    let firstName = "Jürgen";
    console.log(`Hallo ${firstName}!`);
}

ausgabeName();

// console.log(`Hallo ${firstName}!`); // Fehler --> SCOPE!