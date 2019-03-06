import React from 'react'
import Comment from './Comment'
import { render } from 'enzyme'

it('Teste OK - Comment', () => {
    const c = {
        comment: 'OK'
    }
    const wrapper = render(<Comment c={c} />)
    expect(wrapper.text()).toBe('Comentario: OK')
})

it('Teste ERRO - Comment', () => {
    const c = {
        comment: 'Erro'
    }
    const wrapper = render(<Comment c={c} />)
    expect(wrapper.text()).toBe('Comentario: OK')
})