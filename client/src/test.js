import React, { useState } from 'react';

function Test() {
  // 创建状态来跟踪每个标签页的展开/折叠状态
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(true); // 标签页2默认打开
  const [isOpen3, setIsOpen3] = useState(false);

  // 点击标题时触发的函数，切换展开/折叠状态
  const toggleOpen = (tabNumber) => {
    // 关闭所有标签页
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);

    // 打开指定的标签页
    switch (tabNumber) {
      case 1:
        setIsOpen1(true);
        break;
      case 2:
        setIsOpen2(true);
        break;
      case 3:
        setIsOpen3(true);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div onClick={() => toggleOpen(1)} style={{ cursor: 'pointer' }}>
        标签页1 {isOpen1 ? '▲' : '▼'}
      </div>
      {isOpen1 && (
        <div>
          <p>标签页1的内容</p>
        </div>
      )}
      <div onClick={() => toggleOpen(2)} style={{ cursor: 'pointer' }}>
        标签页2 {isOpen2 ? '▲' : '▼'}
      </div>
      {isOpen2 && (
        <div>
          <p>标签页2的内容</p>
        </div>
      )}
      <div onClick={() => toggleOpen(3)} style={{ cursor: 'pointer' }}>
        标签页3 {isOpen3 ? '▲' : '▼'}
      </div>
      {isOpen3 && (
        <div>
          <p>标签页3的内容</p>
        </div>
      )}
    </div>
  );
}

export default Test;
