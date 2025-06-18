class CarService {
  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
  };

  constructor(name, workingHours = CarService.DefaultWorkingHours) {
    this.name = name;
    this.workingHours = workingHours;
  }

  repairCar(carName) {
    if (!carName) {
      console.error(
        'Вам необходимо указать название машины, чтобы ее отремонтировать'
      );
      return;
    }
    if (typeof carName === 'string') {
      const now = new Date().getHours();
      const [hourFrom, hourTill] = Object.values(this.workingHours).map((el) =>
        Number(el.split(':')[0])
      );

      if (now >= hourFrom && now < hourTill)
        alert(
          `Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`
        );
      else {
        alert('К сожалению, мы сейчас закрыты. Приходите завтра');
      }
    } else console.error('Название автомобиля должно быть строкой');
  }
}

const carService = new CarService('RepairCarNow', {
  from: '8:00',
  till: '20:00',
});
carService.repairCar('Mercedes');
