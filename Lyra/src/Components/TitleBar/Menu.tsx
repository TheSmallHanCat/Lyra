import "./TitleBar.css";
import { Menu } from "antd";
import type { MenuProps } from 'antd';

// 定义菜单项类型
interface MenuItemType {
  key: string;
  label: React.ReactNode;
  children?: MenuItemType[];
  onClick?: () => void;
}

const EditorMenu: React.FC = () => {
  // 菜单项数据
  const menuItems: MenuItemType[] = [
    {
      key: 'file',
      label: '文件',
      children: [
        {
          key: 'new',
          label: '新建',
          onClick: () => console.log('新建文件')
        },
        {
          key: 'open',
          label: '打开',
          onClick: () => console.log('打开文件')
        },
        {
          key: 'save',
          label: '保存',
          onClick: () => console.log('保存文件')
        },
        {
          key: 'save-as',
          label: '另存为',
          onClick: () => console.log('另存为')
        }
      ]
    },
    {
      key: 'edit',
      label: '编辑',
      children: [
        {
          key: 'undo',
          label: '撤销',
          onClick: () => console.log('撤销')
        },
        {
          key: 'redo',
          label: '重做',
          onClick: () => console.log('重做')
        },
        {
          key: 'cut',
          label: '剪切',
          onClick: () => console.log('剪切')
        },
        {
          key: 'copy',
          label: '复制',
          onClick: () => console.log('复制')
        },
        {
          key: 'paste',
          label: '粘贴',
          onClick: () => console.log('粘贴')
        }
      ]
    },
    {
      key: 'view',
      label: '视图',
      children: [
        {
          key: 'zoom-in',
          label: '放大',
          onClick: () => console.log('放大')
        },
        {
          key: 'zoom-out',
          label: '缩小',
          onClick: () => console.log('缩小')
        },
        {
          key: 'reset-zoom',
          label: '重置缩放',
          onClick: () => console.log('重置缩放')
        }
      ]
    },
    {
      key: 'help',
      label: '帮助',
      onClick: () => console.log('帮助')
    }
  ];

  // 渲染菜单项
  const renderMenuItems = (items: MenuItemType[]): MenuProps['items'] => {
    return items.map(item => ({
      key: item.key,
      label: item.label,
      onClick: item.onClick,
      children: item.children ? renderMenuItems(item.children) : undefined
    }));
  };

  return (
    <div className="editor-menu">
      <Menu
        mode="horizontal"
        items={renderMenuItems(menuItems)}
        theme="dark"
      />
    </div>
  );
};

export default EditorMenu;
