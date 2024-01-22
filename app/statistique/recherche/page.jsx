import React from 'react';
import { Collapse, Space } from 'antd';
import Section2 from '@/app/_layouts/section/Section2';
import { Search } from 'lucide-react';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const page = () => {
    return (
        <Section2 showRootLink={true}
            titre={"Statistique de Recherche"}
            cl="text-xl"
            titreIcone={
                <Search />
            }>
            <Space size={'large'} direction="horizontal">
                <Collapse
                    collapsible="header"
                    defaultActiveKey={['1']}
                    items={[
                        {
                            key: '1',
                            label: 'Nombre total des recherches',
                            children: <p>0</p>,
                        },
                    ]}
                />
                <Collapse
                    collapsible="header"
                    defaultActiveKey={['1']}
                    items={[
                        {
                            key: '1',
                            label: 'Les expressions les plus recherchées',
                            children: <p>0</p>,
                        },
                    ]}
                />
                <Collapse
                    collapsible="header"
                    defaultActiveKey={['1']}
                    items={[
                        {
                            key: '1',
                            label: 'Les recherches par localisation',
                            children: <p>Kinshasa</p>,
                        },
                    ]}
                />
                <Collapse
                    collapsible="header"
                    defaultActiveKey={['1']}
                    items={[
                        {
                            key: '1',
                            label: 'Statistique périodique',
                            children: <p>Kinshasa</p>,
                        },
                    ]}
                />

            </Space>
        </Section2>
    )
}

export default page