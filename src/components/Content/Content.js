import React from "react";
import { Link } from "react-router-dom";
import "./content.css";

const loremIpsum = `
    I barely knew Philip, but as a clergyman I have no problem telling
    his most intimate friends all about him. Oh God, what have I done?
    Fry! Stay back! He's too powerful! I suppose I could part with 'one'
    and still be feared… Isn't it true that you have been paid for your
    testimony?
`;

export default ({ pageHeader, page }) => {
  let finalHeader = pageHeader;
  const nextPage = page !== "home" && page < 6 ? page + 1 : null;

  if (!finalHeader) finalHeader = `Section ${page < 4 ? 1 : 2} / Page ${page}`;

  return (
    <div className="MainContent-Container">
      <main className="Content">
        <div className="MainContent-Header">
          <h1>{finalHeader}</h1>
          {nextPage && (
            <div className="MainContent-Header-Link">
              <Link to={`/${nextPage}`}>go to next page</Link>
            </div>
          )}
        </div>
        <div>
          <h3>
            {" "}
            🚀🚀 Wow, this is some great content pertaining to the page! 🤯
          </h3>
        </div>
        <div>
          <p>{loremIpsum}</p>
        </div>
        <div>
          <p>{loremIpsum}</p>
        </div>
        <div>
          <p>{loremIpsum}</p>
        </div>
        <div>
          <p>{loremIpsum}</p>
        </div>
        <div>
          <p>{loremIpsum}</p>
        </div>
        <div>
          <p>{loremIpsum}</p>
        </div>
        <div>
          <p>{loremIpsum}</p>
        </div>
        <div>
          <p>{loremIpsum}</p>
        </div>
        <div>
          <p>{loremIpsum}</p>
        </div>
        <div>
          <p>{loremIpsum}</p>
        </div>
        <div>
          <p>{loremIpsum}</p>
        </div>
        <div>
          <p>{loremIpsum}</p>
        </div>
        <div>
          <p>{loremIpsum}</p>
        </div>
      </main>
    </div>
  );
};
