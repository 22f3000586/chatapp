const GenderCheckbox = () => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Male</span>
                    <input 
                        type='radio' 
                        name='gender' 
                        className='radio checked:bg-blue-500' 
                        defaultChecked 
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Female</span>
                    <input 
                        type='radio' 
                        name='gender' 
                        className='radio checked:bg-pink-500' 
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;
