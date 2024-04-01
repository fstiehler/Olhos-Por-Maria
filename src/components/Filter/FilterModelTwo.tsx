import { useProducts } from 'contexts/products-context';

import * as S from './style';

export const availableTypes = ['Mais vendidos', 'Cuidados com o Bebê', 'Gripe e resfriado', 'Saúde sexual', 'Aproveite também', "Medicamentos", "Vitaminas", "Restrição medica"];

const Filter = () => {
  const { filters, filterProducts } = useProducts();

  const selectedCheckboxes = new Set(filters);

  const toggleCheckbox = (label: string) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    const filters = Array.from(selectedCheckboxes) as [];

    filterProducts(filters);
  };

  const createCheckbox = (label: string) => (
    <S.Checkbox label={label} handleOnChange={toggleCheckbox} key={label} />
  );

  const createCheckboxes = () => availableTypes.map(createCheckbox);

  return (
    <S.Container>
      <S.Title>Opções:</S.Title>
      {createCheckboxes()}
    </S.Container>
  );
};

export default Filter;
