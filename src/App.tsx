import React from 'react';
import { Container } from "@radix-ui/themes";
// import { WalletStatus } from "./WalletStatus";
import './styles.css'
import MoveEditor from './utils/CodeEditor'
import KWUSHeader from './components/KWUSHeader';

function App() {
  const [code, setCode] = React.useState(
    `module my_first_package::my_module {\n  use sui::object::{Self, UID};\n  use sui::transfer;\n  use sui::tx_context::{Self, TxContext};\n\n  struct Sword has key, store {\n    id: UID,\n    magic: u64,\n  }\n\n  fun init(ctx: &mut TxContext) {\n    let sword = Sword {\n      id: object::new(ctx),\n      swords_created: 0,\n    };\n    transfer::transfer(sword, tx_context::sender(ctx));\n  }\n\n  public fun magic(self: &Sword): u64 {\n    self.magic\n  }\n}\n`
  );
  return (
    <Container
      size="4"
    >
      <KWUSHeader/>
      <Container
        px="4"
        style={{ background: "var(--gray-a2)", minHeight: 500 }}
      >
        <MoveEditor code={code} setCode={setCode}/>
        {/* <WalletStatus /> */}
      </Container>
    </Container>
  );
}

export default App;
