const NewThreadButton = () => {
  return (
    <div className="fixed bottom-0 right-10 p-2 justify-end w-24 h-24 tooltip" data-tip="Add new thread">
      <a href="#add_thread_modal" className="btn btn-success btn-circle text-white text-4xl">+</a>
    </div>
  )
}
export default NewThreadButton