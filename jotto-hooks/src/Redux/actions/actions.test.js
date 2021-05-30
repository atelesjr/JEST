import moxios from 'moxios'
import { getSecretWord } from './'

describe('invalid word guessed', () => {
    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    });


    test('secretWord is returned', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith( {
                status: 200,
                response: 'party'
            })
        })

        return getSecretWord().then((secretWord) => {
            expect(secretWord).toBe('party')
        })
    })  

})

