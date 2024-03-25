
import {describe, expect, it } from "vitest";
import {soma, subtrair} from './funcoes'


describe('Função de soma', ()=>{
    it('deve devolver a dos dois numeros', () =>{
        const resultado = soma(2, 2)

        expect(resultado).toBe(4)
    })
})


describe('Função de subtrair', ()=>{
    it('deve subtrair os dos dois numeros', () =>{
        const resultado = subtrair(2, 2)

        expect(resultado).toBe(0)
    })
})