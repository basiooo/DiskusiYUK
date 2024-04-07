import PropTypes from 'prop-types'
import { useState } from 'react'
import toast from 'react-hot-toast'

import NewThreadInput from '../input/NewThreadInput'

const NewThreadModal = ({ onNewThread }) => {
  const [form, setForm] = useState({
    title: '',
    category: '',
    body: ''
  })
  const resetForm = () => {
    setForm({
      title: '',
      category: '',
      body: ''
    })
  }

  const handleTitleChange = (e) => {
    setForm((data) => ({ ...data, title: e.target.value }))
  }
  const handleCategoryChange = (e) => {
    const category = e.target.value
    setForm((data) => ({ ...data, category }))
  }
  const handleBodyChange = (e) => {
    const body = e.target.value || e.target
    setForm((data) => ({ ...data, body }))
  }

  const handleSave = () => {
    let { title, category, body } = form
    title = title.trim()
    body = body.trim()
    if (!title) {
      toast.error('Thread title cannot be empty!', {
        id: 'title-empty',
      })
    }
    else if (!body) {
      toast.error('body thread cannot be empty', {
        id: 'body-empty'
      })
    } else {
      onNewThread({ title, category, body })
    }
  }

  return (
    <div id="add_thread_modal" role="dialog" className="modal ">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">New Thread</h3>
        <hr />
        <NewThreadInput form={form} handleBodyChange={handleBodyChange} handleCategoryChange={handleCategoryChange} handleTitleChange={handleTitleChange} />
        <div className="mt-3">
        </div>
        <hr />
        <div className="modal-action">
          <a href='#' id='close_modal' onClick={resetForm} className="btn btn-sm btn-error" >Cancel</a>
          <button type="submit" onClick={handleSave} className="btn btn-sm btn-info">Add Thread</button>
        </div>
      </div>
    </div>
  )
}

NewThreadModal.propTypes = {
  onNewThread: PropTypes.func.isRequired,
}
export default NewThreadModal