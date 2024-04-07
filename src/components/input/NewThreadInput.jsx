import PropTypes from 'prop-types'

import { config } from '../../config'
import { NewThreadShape } from "../../utils/shapes"
import MarkdownEditor from "../markdownEditor/MarkdownEditor"

const NewThreadInput = ({ form, handleTitleChange, handleCategoryChange, handleBodyChange }) => {
    return (
        <form>
            <input
                type="text"
                placeholder="Thread Title"
                className="input focus:input-info input-bordered w-full mt-3"
                value={form.title}
                onChange={handleTitleChange}
                minLength={config.MIN_TITLE_LENGTH}
                maxLength={config.MAX_TITLE_LENGTH}
            />
            <input
                type="text"
                placeholder="Thread Category"
                className="input focus:input-info input-bordered w-full mt-3"
                value={form.category}
                onChange={handleCategoryChange}
                minLength={config.MIN_CATEGORY_LENGTH}
                maxLength={config.MAX_CATEGORY_LENGTH}
            />
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-base">Content</span>
                </div>
                <MarkdownEditor
                    value={form.body}
                    onChange={handleBodyChange}
                />
            </label>
        </form>
    )
}

NewThreadInput.propTypes = {
    form: PropTypes.shape(NewThreadShape).isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    handleCategoryChange: PropTypes.func.isRequired,
    handleBodyChange: PropTypes.func.isRequired
}
export default NewThreadInput