import LoadingBar from 'react-redux-loading-bar'

const Loading = () => {
    return (
        <div className="fixed top-0 h-6 w-full z-50">
            <LoadingBar className='h-1 !bg-info' />
        </div>
    )
}

export default Loading