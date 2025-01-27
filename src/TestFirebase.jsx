import { useEffect } from 'react';
import { ref, set, onValue } from 'firebase/database';
import { db } from './firebase';

const TestFirebase = () => {
  useEffect(() => {
    const testRef = ref(db, 'test');
    
    // Запись данных в базу
    set(testRef, {
      message: 'Test connection',
      timestamp: Date.now()
    })
    .then(() => {
      console.log('✅ Данные успешно записаны');
    })
    .catch((error) => {
      console.error('❌ Ошибка при записи:', error);
    });

    // Чтение данных из базы
    onValue(testRef, (snapshot) => {
      console.log('📖 Прочитанные данные:', snapshot.val());
    }, (error) => {
      console.error('❌ Ошибка при чтении:', error);
    });

  }, []);

  return (
    <div>
      <h2>Тест подключения к Firebase</h2>
      <p>Проверьте консоль браузера</p>
    </div>
  );
};

export default TestFirebase;