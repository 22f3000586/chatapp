const Message = () => {
    return (
		<div className='chat chat-end'>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src='https://cdn3.iconfinder.com/data/icons/generic-05/100/less_Is_More_V1.0-21-1024.png' />
				</div>
			</div>
			<div className={`chat-bubble text-white bg-blue-500`}>yoooo</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>11:11</div>
		</div>
	);
};
export default Message;