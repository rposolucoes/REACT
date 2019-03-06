import React from 'react'
import Comments from './Comments'
import Comment from './Comment'
import { shallow } from 'enzyme'


describe('<Comments />',() => {

    // Teste que da certo     
    it('Teste OK - Comments',() => {

        // Criação da variavel tipo array para ser enviado ao teste
        const comments = {
            a: {id: 'a',Comment:'Comentario 1'},
            b: {id: 'b',Comment:'Comentario 2'}
        }
        const wrapper = shallow(<Comments comments={comments} />)
        
        // Verifica a quantidade de elementos 
        expect(wrapper.find(Comment).length).toBe(2)
        
        // Verifica se o elemente e identico 
        expect(wrapper.find(Comment).get(0).props.c).toBe(comments.a)
    })

    // Teste que da erro
    it('Teste ERRO - Comments',() => {

        // Criação da variavel tipo array para ser enviado ao teste
        const comments = {
            a: {id: 'a',Comment:'Comentario 1'},
            b: {id: 'b',Comment:'Comentario 2'}
        }
        const wrapper = shallow(<Comments comments={comments} />)

        // Verifica a quantidade de elementos
        expect(wrapper.find(Comment).length).toBe(1),

        // Verifica se o elemente e identico 
        expect(wrapper.find(Comment).get(0).props.c).toBe(comments.b)
    })

})