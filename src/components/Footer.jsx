import React, { useState } from "react";

export default function Footer() {
  const [show, setShow] = useState(false);
  const [rules, setRules] = useState(false);
  const [points, setPoints] = useState(false);
  const [contactShow, setContactShow] = useState(false);
  return (
    <>
      <footer className="bg-gray-800 w-full">
        <div className="mx-auto p-4 flex justify-between">
          <div className="flex flex-row items-center">
            <img
              src="./assets/images/logo.png"
              className="h-10 self-center mr-4"
              alt="Logo"
            />
            <span className="self-center text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-semibold whitespace-nowrap text-gray-300">
              Wordle - Unlimited
            </span>
          </div>
          <ul className="flex flex-col items-end sm:items-center md:items-center lg:items-center sm:flex-row md:flex-row lg:flex-row text-xl font-medium text-gray-500">
            <li>
              <div
                onClick={() => setShow(true)}
                className="sm:mr-4 md:mr-4 lg:mr-4 hover:underline hover:cursor-pointer"
              >
                About
              </div>
            </li>
            <li>
              <div
                onClick={() => setRules(true)}
                className="sm:mr-4 md:mr-4 lg:mr-4 hover:underline hover:cursor-pointer"
              >
                Rules
              </div>
            </li>
            <li>
              <div
                onClick={() => setPoints(true)}
                className="sm:mr-4 md:mr-4 lg:mr-4 hover:underline hover:cursor-pointer"
              >
                Points System
              </div>
            </li>
            <li>
              <div
                onClick={() => setContactShow(true)}
                className="hover:underline hover:cursor-pointer"
              >
                Contact
              </div>
            </li>
          </ul>
        </div>
      </footer>
      {show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-lg">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShow(false)}
                >
                  <span className="bg-white text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
                <div className="relative px-4 flex-auto">
                  <p className="my-4 text-black text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-relaxed whitespace-pre-wrap">
                    Hey, welcome to <b>Wordle - Unlimited</b>, the best word
                    game ever. Play as many games you want and try to reach the
                    highest amount of points possible. This website is made by
                    Abhijit Debnath as a passion project with the help of React,
                    Tailwind CSS and the Free Dictionary API.
                    <br />
                    <br />
                    PS: All the credit goes to <b>Josh Wardle</b>, we wouldn't
                    be here without him.
                    <br />
                    <br />
                    Disclaimer: All issues regarding the words are due to the
                    external dictionary API, I do not claim any responsibility.
                  </p>
                </div>
                <div className="flex items-center justify-center p-6">
                  <button
                    className="transition duration-0 bg-emerald-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-yellow-400 active:bg-gray-800 active:border-black rounded"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    That's Great
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {rules ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setRules(false)}
                >
                  <span className="bg-white text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
                <div className="relative px-4 flex-auto">
                  <p className="text-2xl"> Rules</p>
                  <p className="my-1 sm:my-4 md:my-4 lg:my-4 text-black text-lg sm:text-xl md:text-xl lg:text-xl leading-tight sm:leading-relaxed md:leading-relaxed lg:leading-relaxed whitespace-pre-wrap">
                    1) You need to guess the secret word selected by the website
                    within a maximum of six strategic guesses.
                    <br />
                    2) You can choose to guess a 5-letter, 6-letter or 7-letter
                    secret word.
                    <br />
                    3) The word guesses must be valid and should exist in a
                    dictionary (any form of a word is accepted).
                    <br />
                    4) The word guesses must be of equal length as the secret
                    word.
                    <br />
                    5) Letters can be used more than once in a guess and also in
                    the secret word.
                    <br />
                    6) After each guess, the game provides feedback on the
                    accuracy of the guess:
                    <br />
                    A green tile indicates that a letter in the guess is correct
                    and in the correct position.
                    <br />
                    A yellow tile indicates that a letter in the guess is
                    correct but in the wrong position.
                    <br />A gray tile indicates that a letter in the guess is
                    not included in the word at all.
                  </p>
                </div>
                <div className="flex items-center justify-center p-6">
                  <button
                    className="transition duration-0 bg-emerald-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-yellow-400 active:bg-gray-800 active:border-black rounded"
                    type="button"
                    onClick={() => setRules(false)}
                  >
                    I Understand
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {points ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-md">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setPoints(false)}
                >
                  <span className="bg-white text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
                <div className="relative px-4 flex-auto">
                  <p className="text-2xl"> Points System</p>
                  <p className="my-4 text-black text-xl leading-relaxed whitespace-pre-wrap">
                    1) For each guess, we count the number of green and yellow
                    tiles.
                    <br />
                    2) If your guess is correct (i.e. all the tiles are green),
                    we increase the score by:
                    <br /> (6-(Number of your guess))^2 * 5 * (Length of guess)
                    <br />
                    3) If your guess is not correct then we increase the score
                    by:
                    <br /> (6-(Number of your guess)) * ((3 * (Number of yellow
                    tiles)) + (5 * (Number of green tiles)))
                    <br />
                    4) The scores for each guess are cummulated to get the final
                    score.
                    <br />
                    5) If you are not able to guess the word within 6 attempts
                    then your score is reduced to zero.
                  </p>
                </div>
                <div className="flex items-center justify-center p-6">
                  <button
                    className="transition duration-0 bg-emerald-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-yellow-400 active:bg-gray-800 active:border-black rounded"
                    type="button"
                    onClick={() => setPoints(false)}
                  >
                    I Understand
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {contactShow ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-lg">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setContactShow(false)}
                >
                  <span className="bg-white text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
                <div className="relative px-4 flex-auto">
                  <form
                    className="my-4 text-black text-lg leading-relaxed whitespace-pre-wrap"
                    id="mail"
                    method="POST"
                    action="mailto: adboxer99@gmail.com"
                    encType="text/plain"
                  >
                    <div>
                      Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        className="border border-black rounded-md p-1"
                        aria-required=""
                        id="name"
                        name="name"
                        type="text"
                      />
                    </div>
                    <br />
                    <div>
                      Phone No:&nbsp;&nbsp;
                      <input
                        className="border border-black rounded-md p-1"
                        aria-required=""
                        name="phone"
                        id="mobile_number"
                        type="tel"
                      />
                    </div>
                    <br />
                    <div>Your message:</div>
                    <textarea
                      className="border border-black rounded-md p-1"
                      rows="7"
                      style={{ width: "100%" }}
                      name="message"
                    ></textarea>
                    <br />
                  </form>
                </div>
                <div className="flex items-center justify-center p-6">
                  <button
                    className="transition duration-0 bg-emerald-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-yellow-400 active:bg-gray-800 active:border-black rounded"
                    type="submit"
                    form="mail"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
