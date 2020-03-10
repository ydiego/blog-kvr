import {
  Button,
  Layout,
  Menu,
  Icon,
  Form,
  Input,
  Col,
  Row,
  Table,
  Modal,
  message,
  Select
} from "ant-design-vue";

export default function registerComponents(Vue) {
  Vue.component(Button.name, Button);
  Vue.component(Layout.name, Layout);
  Vue.component(Layout.Content.name, Layout.Content);
  Vue.component(Layout.Sider.name, Layout.Sider);
  Vue.component(Layout.Header.name, Layout.Header);
  Vue.component(Layout.Footer.name, Layout.Footer);
  Vue.component(Menu.name, Menu);
  Vue.component(Menu.Item.name, Menu.Item);
  Vue.component(Icon.name, Icon);
  Vue.component(Input.name, Input);
  Vue.component(Form.name, Form);
  Vue.component(Col.name, Col);
  Vue.component(Row.name, Row);
  Vue.component(Table.name, Table);
  Vue.component(Select.name, Select);
  Vue.component(Select.Option.name, Select.Option);
  Vue.component(Form.Item.name, Form.Item);
  Vue.prototype.$confirm = Modal.confirm;
  Vue.prototype.$message = message;
}
