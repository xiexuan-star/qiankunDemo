import { ObjectType, RegistrableApp } from 'qiankun';

export default [{
  name: 'child-app',
  entry: '//localhost:8001',
  container: '#child-app',
  activeRule: '/child'
}] as RegistrableApp<ObjectType>[];
