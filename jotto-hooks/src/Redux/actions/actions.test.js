import moxios from 'moxios'
import { getSecretWord } from './'

describe('invalid word guessed', () => {
    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    });


    test('secretWord is returned', async () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith( {
                status: 200,
                response: 'party'
            })
        })

        const mocksetSecretWord = jest.fn()
        await getSecretWord(mocksetSecretWord)
        expect(mocksetSecretWord).toHaveBeenCalledWith('party')

    })  

})

