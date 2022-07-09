import { DownOutlined} from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import './Topbar.css'

const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a className='Top__dropdown' target="_blank" rel="noopener noreferrer" href="/#">
              Menu Produtos
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a className='Top__dropdown' target="_blank" rel="noopener noreferrer" href="/#">
              Ofertas Tech
            </a>
          ),
          disabled: false,
        },
        {
          key: '3',
          label: (
            <a className='Top__dropdown' target="_blank" rel="noopener noreferrer" href="/#">
              Mais Procurados 
            </a>
          ),
          disabled: false,
        }
      ]}
    />
  );

  const menu2 = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a className='Top__dropdown' target="_blank" rel="noopener noreferrer" href="http://localhost:8000/admin/login">
              Login
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a className='Top__dropdown' target="_blank" rel="noopener noreferrer" href="/#">
              Cadastrar
            </a>
          ),
          disabled: false,
        },
        
      ]}
    />
  );


  export function Topbar () {

    return (
        <div className='Top__Container'>
            <nav>
                <ul>
                    <li>

                    <Dropdown overlay={menu2}>
                        <a className='Top__a' href="/#" onClick={(e) => e.preventDefault()}>
                        <Space>
                            Marketplace
                            <DownOutlined />
                        </Space>
                        </a>
                    </Dropdown>


                    </li>
                    <li ><a className='Top__a' href="/#">Home</a></li>
                    <li ><a className='Top__a' href="/#">Destaque</a></li>
                    <li >
                    <Dropdown overlay={menu}>
                        <a className='Top__a' href="/#" onClick={(e) => e.preventDefault()}>
                        <Space>
                            Produtos
                            <DownOutlined />
                        </Space>
                        </a>
                    </Dropdown>
                    </li>
                    <li ><a className='Top__a' href="/#">Cartão MZ</a></li>
                    <li ><a className='Top__a' href="/#">Contato</a></li>
                    <li ><a className='Top__a' href="/#">Baixe nosso app</a></li>
                </ul>
            </nav>


        </div>


    );

}