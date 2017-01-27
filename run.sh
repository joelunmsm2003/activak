killall -9 python
killall -9 node
cd /home/andy/proyectos/kine
python manage.py runserver&

cd /home/andy/proyectos/kinefront/server
npm start&

cd /home/andy/proyectos/kinefront/client
gulp watch&

