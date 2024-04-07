import MDEditor, { commands } from "@uiw/react-md-editor"
import PropTypes from 'prop-types'

const MarkdownEditor = ({ value, onChange }) => {
  return (
    <MDEditor
      className="!min-h-60"
      onChange={(value, viewUpdate) => onChange({ target: value })}
      value={value}
      preview="edit"
      commands={[
        commands.codeEdit, commands.codePreview
      ]}
      extraCommands={[commands.fullscreen]}
    />
  )
}
MarkdownEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
export default MarkdownEditor