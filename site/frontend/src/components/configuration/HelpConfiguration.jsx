import React from 'react';
import AskAccordion from '../accordion/AskAccordion';

const HelpConfiguration = () => {


  return (
    <div>
      <h1 className='text-xl font-semibold p-4'>Perguntas frequentes</h1>
      <hr />
      <div className='px-[20%] py-5'>
        <AskAccordion name={"Como cadastrar novos clientes"} content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus placeat natus architecto facere neque praesentium nemo reiciendis nulla, quam officiis eveniet distinctio possimus cum reprehenderit non in dignissimos aperiam ducimus."} />
        <AskAccordion name={"Como cadastrar novas propostas"} content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus placeat natus architecto facere neque praesentium nemo reiciendis nulla, quam officiis eveniet distinctio possimus cum reprehenderit non in dignissimos aperiam ducimus."} />
        <AskAccordion name={"Como cadastrar novas ligações"} content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus placeat natus architecto facere neque praesentium nemo reiciendis nulla, quam officiis eveniet distinctio possimus cum reprehenderit non in dignissimos aperiam ducimus."} />
        <AskAccordion name={"Como funcionam os indicadores do dashboard"} content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus placeat natus architecto facere neque praesentium nemo reiciendis nulla, quam officiis eveniet distinctio possimus cum reprehenderit non in dignissimos aperiam ducimus."} />
      </div>
    </div >
  );
};

export default HelpConfiguration;
