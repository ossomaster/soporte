import React, { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const modules = {
	toolbar: [
		["bold", "italic", "underline", "strike"],
		[{ list: "ordered" }, { list: "bullet" }],
	],
}
const formats = ["bold", "italic", "underline", "strike", "list", "bullet"]

const EditorHtml = ({ defaultValue = "", onChange }) => {
	const [editorState, setEditorState] = useState(defaultValue)

	const handleChangeEditorState = (newEditorState) => {
		setEditorState(newEditorState)
		onChange(newEditorState)
	}

	return (
		<ReactQuill
			theme="snow"
			value={editorState}
			onChange={handleChangeEditorState}
			modules={modules}
			formats={formats}
		/>
	)
}

export default EditorHtml
