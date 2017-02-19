import Error_ from '../Src/Error_'

test('Constructor load window._k_report_error',() => {
    let error_

    window._k_report_error = { target: { currentSrc: 'http://404mzk.com?K.js' } }
    error_ = new Error_()
    
    expect( error_.message[0].url ).toBe('http://404mzk.com?K.js')

})

test('resolverEvent js static file error && error is object',() => {
    let error_ = new Error_(),
        mock_error = { target: { currentSrc: 'http://404mzk.com?K.js' }},
        message_array = error_.resolverEvent( mock_error )
    
    expect( message_array[0].url ).toBe('http://404mzk.com?K.js')

})

test('resolverEvent js error && error is array',() => {
    let error_ = new Error_(),
        mock_error = { message: 'hello i am a error' },
        message_array = error_.resolverEvent( [ mock_error ] )
    
    expect( message_array[0].message ).toBe('hello i am a error')

})

/**
 * 开始监听,触发错误,校验验收到错误
 */
test('setOnError listener error to Object message',() => {
    let error_ = new Error_()

    //abc()
    //expect( error_.message ).toBe(true)
})