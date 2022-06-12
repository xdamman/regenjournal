import React, { useState, useEffect } from "react";
import { MentionsInput, Mention } from "react-mentions";

const mentionStyle = {
  backgroundColor: "#cee4e5",
};

const style = {
  control: {
    backgroundColor: "#fff",
    fontSize: 14,
    fontWeight: "normal",
  },

  "&multiLine": {
    control: {
      fontFamily: "monospace",
      minHeight: 63,
    },
    highlighter: {
      padding: 9,
      border: "1px solid transparent",
    },
    input: {
      padding: 9,
      border: "1px solid silver",
    },
  },

  "&singleLine": {
    display: "inline-block",
    width: 180,

    highlighter: {
      padding: 1,
      border: "2px inset transparent",
    },
    input: {
      padding: 1,
      border: "2px inset",
    },
  },

  suggestions: {
    list: {
      backgroundColor: "white",
      border: "1px solid rgba(0,0,0,0.15)",
      fontSize: 14,
    },
    item: {
      padding: "5px 15px",
      borderBottom: "1px solid rgba(0,0,0,0.15)",
      "&focused": {
        backgroundColor: "#cee4e5",
      },
    },
  },
  input: {
    overflow: "auto",
    height: 70,
    width: "100%",
  },
  highlighter: {
    boxSizing: "border-box",
    overflow: "hidden",
    height: 70,
  },
};

const InputMentions = ({ data, onSubmit }) => {
  let [comment, setComment] = useState("");

  function onAdd(id, display) {
    // Do something here
    console.log("Comment inside onAdd: ", comment);
  }

  function handleCommentChange(e) {
    // Handle the changes in the textArea
    console.log("from handleCommentChange: ", e.target.value);
    setComment(e.target.value);
  }

  function renderSuggestion(entry, search, highlightedDisplay, index, focused) {
    // Modify the suggestion dropdown by returning valid JSX
    return (
      <>
        <span>
          {entry.display} ({entry.name})
        </span>
      </>
    );
  }

  function handleSubmitComment(e) {
    e.preventDefault();
    console.log("New entry", comment);
    if (onSubmit) {
      onSubmit({ comment });
    }
    // Do something to submit comment
  }

  return (
    <>
      <div className="flex flex-col w-full">
        <MentionsInput
          value={comment}
          onChange={handleCommentChange}
          placeholder={"Mention people using '@', tag using '#'"}
          style={style}
        >
          <Mention
            trigger="@"
            markup="@[__display__](__id__)"
            data={data.mentions}
            // displayTransform={(id, display) => `@${display}`}
            renderSuggestion={renderSuggestion}
            onAdd={onAdd}
            appendSpaceOnAdd={true}
            style={mentionStyle}
          />
          <Mention
            trigger="#"
            markup="#[__display__](__id__)"
            data={data.hashtags}
            // renderSuggestion={renderSuggestion}
            // displayTransform={(id, display) => `#${display}`}
            onAdd={onAdd}
            appendSpaceOnAdd={true}
            style={mentionStyle}
          />
        </MentionsInput>
        <button
          type="button"
          onClick={handleSubmitComment}
          class="my-4 w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          RECORD
        </button>
      </div>
    </>
  );
};

export default InputMentions;
