import { ButtonPag } from "./style";

const PageButtons = ({offset, setOffset, characterList, limit}) => {
  return (
    <>
      {offset <= 1 ? (
        <div>
          <ButtonPag onClick={() => setOffset(offset + 1)}>Próximo</ButtonPag>
        </div>
      ) : characterList.length < limit ? (
        <div>
          <ButtonPag onClick={() => setOffset(offset - 1)}>Anterior</ButtonPag>
        </div>
      ) : (
        <div>
          <ButtonPag onClick={() => setOffset(offset - 1)}>Anterior</ButtonPag>
          <ButtonPag onClick={() => setOffset(offset + 1)}>Próximo</ButtonPag>
        </div>
      )}
    </>
  );
};

export default PageButtons