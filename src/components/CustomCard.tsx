import { Button, Checkbox, Input } from 'antd';
import Card from 'antd/lib/card';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { IContentModel } from './interfaces';

export const CustomCards = observer(
  ({ content }: { content: IContentModel }) => {
    const {
      title,
      description,
      notes,
      available,
      seen,
      isSeen,
      changeNotes,
      changeAvailable,
      changeSeen,
      addToList,
    } = content;

    useEffect(() => {
      if (isSeen) {
        alert(`Is seen ${title}`);
      }
    }, [isSeen]);

    return (
      <Card title={title}>
        {description}
        <p></p>
        <Input
          value={notes}
          placeholder={notes}
          onChange={(e) => changeNotes(e.target.value)}
        />
        <p> </p>
        <h3>Already read:</h3>
        <Checkbox
          defaultChecked={seen}
          checked={seen}
          onChange={(e) => changeSeen(e.target.checked)}
        />
        <h3>Is it available:</h3>
        <Checkbox
          defaultChecked={available}
          checked={available}
          onChange={(e) => changeAvailable(e.target.checked)}
        />
        <p></p>
        <Button onClick={() => addToList()}>Submit</Button>
      </Card>
    );
  }
);
