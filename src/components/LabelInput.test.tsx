import { render, screen } from '@testing-library/react';
import { LabelInput } from './LabelInput';
import '@testing-library/jest-dom';


describe('Component LabelInput', () => {  
  it('Should be render label', ()=>{
    render(
      <LabelInput id="lblText" text="testText"/>
    );
    expect(screen.getByTestId('lblText')).toBeInTheDocument()
  })
});