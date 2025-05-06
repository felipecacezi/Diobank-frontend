import { render, screen } from '@testing-library/react';
import { InputText } from './InputText';
import '@testing-library/jest-dom';


describe('Component InputText', () => {
  
  it('Should put correct value in input', ()=>{
    render(
      <InputText id="txtTest" type="text"/>
    );
    expect(screen.getByTestId('txtTest')).toBeInTheDocument()
  })
});